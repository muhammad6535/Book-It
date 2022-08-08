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
using Microsoft.EntityFrameworkCore;

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

    }
}
