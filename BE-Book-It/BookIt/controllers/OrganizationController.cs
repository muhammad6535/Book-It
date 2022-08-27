using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Net.Http;
using System.Threading.Tasks;
using System.Collections.Generic;
using BookIt.models;
using System.Linq;
//using Organization.models.Organization.CuurencyDto;
using System.Net;

namespace BookIt.controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrganizationController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public OrganizationController(ApplicationDbContext context)
        {
            _context = context;
        }


        //------------------APIs-------------------
        [HttpGet("Organizations")]
        public IActionResult GetOrganization()
        {
            return Ok(_context.Organization.Select(o => o));
        }

        [HttpPost("InsertOrganization")]
        public IActionResult InsertOrganization(string name, string phone, string email, string userName, string password)
        {
            Organization organization = new()
            {
                Name = name,
                Phone = phone,
                Email = email
            };
            _context.Organization.Add(organization);
            _context.SaveChanges();
            Users user = new()
            {
                UserName = userName,
                Password = password,
                OrgId = organization.Id,
                Email = email,
                Phone = phone
            };
            _context.Users.Add(user);
            _context.SaveChanges();
            return Ok(organization);
        }


    }
}
