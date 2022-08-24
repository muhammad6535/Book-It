using Microsoft.AspNetCore.Mvc;
using BookIt.models;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System;

namespace BookIt.controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UsersController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("UserNameValidation")]
        public IActionResult CheckUserNameValidation(string userName,string password)
        {
            var user = _context.Users.FirstOrDefault(o=>o.UserName == userName && o.Password == password);
            if (user == null)
                return Ok();
            return Ok(user);
        }
    }
}
