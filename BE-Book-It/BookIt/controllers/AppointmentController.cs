using Microsoft.AspNetCore.Mvc;
using BookIt.models;
using System.Linq;
using Microsoft.EntityFrameworkCore;

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
        public IActionResult GetAppointments(int branchId, int serviceId)
        {
            return Ok(_context.Appointment.Include(o => o.Branch).Where(o => o.BranchId == branchId));
            //return Ok(_context.Appointment.Include(o => o.Branch).Where(o => o.BranchId == branchId && o.ServiceId == serviceId));

        }
    }
}
