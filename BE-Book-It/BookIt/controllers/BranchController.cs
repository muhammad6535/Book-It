using Microsoft.AspNetCore.Mvc;
using BookIt.models;
using System.Linq;
//using Organization.models.Organization.CuurencyDto;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace BookIt.controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BranchController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public BranchController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("Branches")]
        public IActionResult GetBranches(int orgId)
        {
            return Ok(_context.Branch.Include(o => o.Organization).Where(o => o.OrgId == orgId));
        }

        [HttpPut("UpdateBranchDetails")]
        public IActionResult UpdateBranchDetails(string branchId, string name, string email, string phone, string address,
            int? serviceId, int timeAvg, string serviceName, string password)
        {
            try
            {
                Branch branch = _context.Branch.FirstOrDefault(o => o.Id == int.Parse(branchId.Trim()));
                if (branch == null)
                {
                    return BadRequest("Branch Not Found!");
                }
                branch.Name = name.Trim();
                branch.Email = email.Trim();
                branch.Phone = phone.Trim();
                branch.Address = address.Trim();
                branch.Password = password.Trim();
                if (serviceId.HasValue)
                {
                    ServiceType serviceType = _context.ServiceType.FirstOrDefault(o => o.Id == serviceId.Value);
                    serviceType.TimeAvg = timeAvg;
                    serviceType.Name = serviceName.Trim();
                }
                _context.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("AddNewBranch")]
        public IActionResult AddNewBranch(int orgId, string name, string email, string phone, string address,
           List<ServiceType> services, string password
            //List<WorkHours> workHours
            )
        {
            try
            {
                Branch branch = new()
                {
                    Name = name.Trim(),
                    Email = email.Trim(),
                    Phone = phone.Trim(),
                    Address = address.Trim(),
                    OrgId = orgId,
                    Password = password
                };
                _context.Branch.Add(branch);
                _context.SaveChanges();
                if (branch.Id > 0)
                    InsertServices(branch.Id, services);
                //InsertWorkHours(branch.Id, workHours);
                _context.SaveChanges();
                return Ok(branch);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("BranchUserValidation")]
        public IActionResult BranchUserValidation(string email,string password)
        {
            return Ok(_context.Branch.Include(o => o.Organization).Where(o => o.Email == email && o.Password == password));
        }

        //help methods
        private void InsertServices(int branchId, List<ServiceType> services)
        {
            foreach (ServiceType s in services)
            {
                ServiceType serviceType = new();
                serviceType.Name = s.Name.Trim();
                serviceType.TimeAvg = s.TimeAvg;
                serviceType.BranchId = branchId;
                _context.ServiceType.Add(serviceType);
                _context.SaveChanges();
            }
        }

        //private void InsertWorkHours(int branchId, List<WorkHours> workHours)
        //{
        //    foreach (WorkHours w in workHours)
        //    {
        //        WorkHours workHour = new();
        //        workHour.BranchId = branchId;
        //        workHour.WorkFrom = w.WorkFrom;
        //        workHour.WorkTo = w.WorkTo;
        //        workHour.BreakFrom = w.BreakFrom;
        //        workHour.BreakTo = w.BreakTo;
        //        workHour.IsDayOff = w.IsDayOff;
        //        _context.WorkHours.Add(workHour);
        //        _context.SaveChanges();
        //    }
        //}
    }

}
