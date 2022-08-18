using Microsoft.AspNetCore.Mvc;
using BookIt.models;
using System.Linq;
//using Organization.models.Organization.CuurencyDto;
using Microsoft.EntityFrameworkCore;

namespace BookIt.controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceTypeController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ServiceTypeController(ApplicationDbContext context)
        {
            _context = context;
        }



        [HttpGet("ServiceTypes")]
        public IActionResult GetOrganization(int branchId)
        {
            return Ok(_context.ServiceType.Include(o => o.Branch).Where(o => o.BranchId == branchId));
        }

    }
}
