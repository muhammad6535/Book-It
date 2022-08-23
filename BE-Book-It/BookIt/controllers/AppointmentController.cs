using Microsoft.AspNetCore.Mvc;
using BookIt.models;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

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



        //used in dashboard - representative page
        [HttpGet("Appointments")]
        public IActionResult GetAppointments(int branchId, int serviceId, DateTime date)
        {
            return Ok(_context.Appointment.Include(o => o.Branch).ThenInclude(o => o.Organization)
                .Where(o => o.BranchId == branchId && o.Date.Value >= date && o.Date.Value <= date.AddDays(1)));
            //return Ok(_context.Appointment.Include(o => o.Branch).Where(o => o.BranchId == branchId && o.ServiceId == serviceId));
        }

        //used in mobile app - book appointment page
        [HttpGet("BookedAppiontmentsByDate")]
        public IActionResult GetBookedAppiontmentsByDate(int branchId, int serviceId, DateTime date)
        {
            return Ok(_context.Appointment.Include(o => o.ServiceType).Include(o => o.Branch).ThenInclude(o => o.Organization)
                .Where(o => o.BranchId == branchId && o.Date.Value >= date && o.Date.Value <= date.AddDays(1) && o.ServiceId == serviceId).Select(o => o.Date.Value));
        }


        [HttpPost("InsertAppointment")]
        public IActionResult InsertAppointment(string name,string email,string phone,int branchId, int serviceId, DateTime date)
        {
            try
            {
                var appointment = new Appointment();
                appointment.CustomerName = name;
                appointment.CustomerEmail = email;
                appointment.CustomerPhone = phone;
                appointment.BranchId = branchId;    
                appointment.ServiceId = serviceId;  
                appointment.Date = date;
                _context.Appointment.Add(appointment);
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
