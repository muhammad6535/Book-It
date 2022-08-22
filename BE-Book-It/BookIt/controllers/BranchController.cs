using Microsoft.AspNetCore.Mvc;
using BookIt.models;
using System.Linq;
//using Organization.models.Organization.CuurencyDto;
using Microsoft.EntityFrameworkCore;
using System;

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
        public IActionResult GetOrganization(int orgId)
        {
            return Ok(_context.Branch.Include(o => o.Organization).Where(o => o.OrgId == orgId));
        }


        [HttpPut("UpdateBranchDetails")]
        public IActionResult UpdateBranchDetails(int branchId, string name, string email, string phone, string address,
            int? serviceId, int timeAvg, string serviceName)
        {
            try
            {
                Branch branch = _context.Branch.FirstOrDefault(o => o.Id == branchId);
                branch.Name = name;
                branch.Email = email;
                branch.Phone = phone;
                branch.Address = address;
                if (serviceId.HasValue)
                {
                    ServiceType serviceType = _context.ServiceType.FirstOrDefault(o => o.Id == serviceId.Value);
                    serviceType.TimeAvg = timeAvg;
                    serviceType.Name = serviceName;
                }
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return Ok();
        }
    }

}

