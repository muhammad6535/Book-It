using Microsoft.AspNetCore.Mvc;
using BookIt.models;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System;

namespace BookIt.controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AppointmentController(ApplicationDbContext context)
        {
            _context = context;
        }


        [HttpGet("Appointments")]
        public IActionResult GetAppointments(int branchId, int serviceId, DateTime date)
        {
            return Ok(_context.Appointment.Include(o => o.Branch).ThenInclude(o => o.Organization)
                .Where(o => o.BranchId == branchId && o.Date.Value >= date && o.Date.Value <= date.AddDays(1)));
            //return Ok(_context.Appointment.Include(o => o.Branch).Where(o => o.BranchId == branchId && o.ServiceId == serviceId));
        }


        [HttpGet("BookedAppiontmentsByDate")]
        public IActionResult GetBookedAppiontmentsByDate(int branchId, int serviceId, DateTime date)
        {
            return Ok(_context.Appointment.Include(o => o.ServiceType).Include(o => o.Branch).ThenInclude(o => o.Organization)
                .Where(o => o.BranchId == branchId && o.Date.Value >= date && o.Date.Value <= date.AddDays(1) && o.ServiceId == serviceId).Select(o => o.Date.Value));
        }
    }
}
