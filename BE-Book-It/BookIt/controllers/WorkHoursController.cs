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
    public class WorkHoursController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public WorkHoursController(ApplicationDbContext context)
        {
            _context = context;
        }


        [HttpGet("WorkHours")]
        public IActionResult GetWorkHours(int branchId)
        {
            return Ok(_context.WorkHours.Include(o => o.Branch).Where(o => o.BranchId== branchId).Select(o=> new {
                o,
                workFrom = o.WorkFrom.Value.ToString("HH:mm"),
                workTo = o.WorkTo.Value.ToString("HH:mm"),
                breakFrom = o.BreakFrom.Value.ToString("HH:mm"),
                breakTo = o.BreakTo.Value.ToString("HH:mm"),

            }));
        }
    }
}
