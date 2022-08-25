using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace BookIt.models
{
    public class ApplicationDbContext : IdentityDbContext<IdentityUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Organization> Organization { get; set; }
        public DbSet<Branch> Branch { get; set; }
        public DbSet<WorkHours> WorkHours { get; set; }
        public DbSet<Appointment> Appointment { get; set; }
        public DbSet<ServiceType> ServiceType { get; set; }
        public DbSet<Users> Users { get; set; }
    }
}
