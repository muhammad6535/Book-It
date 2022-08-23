using Microsoft.AspNetCore.Mvc;
using BookIt.models;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System;

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
            return Ok(_context.WorkHours.Include(o => o.Branch).Where(o => o.BranchId == branchId).Select(o => new
            {
                o,
                workFrom = o.WorkFrom.Value.ToString("HH:mm"),
                workTo = o.WorkTo.Value.ToString("HH:mm"),
                breakFrom = o.BreakFrom.Value.ToString("HH:mm"),
                breakTo = o.BreakTo.Value.ToString("HH:mm"),
            }));
        }

        [HttpGet("WorkHoursByDate")]
        public IActionResult GetWorkHoursByDate(int branchId, string dayWeek)
        {
            return Ok(_context.WorkHours.Include(o => o.Branch).Where(o => o.Day == dayWeek && o.BranchId == branchId && o.IsDayOff == false)
                .Select(o => new
                {
                    o,
                    workFrom = o.WorkFrom.Value.ToString("HH:mm"),
                    workTo = o.WorkTo.Value.ToString("HH:mm"),
                    breakFrom = o.BreakFrom.Value.ToString("HH:mm"),
                    breakTo = o.BreakTo.Value.ToString("HH:mm"),
                }));
        }


        [HttpPut("UpdateWorkHours")]
        public IActionResult UpdateWorkHours(int branchId, string dayWeek, DateTime workFrom, DateTime workTo,
            DateTime breakFrom, DateTime breakTo, bool isDayOff)
        {
            try
            {
                WorkHours workHours = _context.WorkHours.FirstOrDefault(o => o.BranchId == branchId && o.Day == dayWeek);
                if (workHours == null)
                    return BadRequest("Work Hours Not Found");
                workHours.WorkFrom = workFrom;
                workHours.WorkTo = workTo;
                workHours.BreakFrom = breakTo.Subtract(breakFrom).TotalMinutes != 0 ? breakFrom : null;
                workHours.BreakTo = breakTo.Subtract(breakFrom).TotalMinutes != 0 ? breakTo: null;
                workHours.IsDayOff = isDayOff;
                _context.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
