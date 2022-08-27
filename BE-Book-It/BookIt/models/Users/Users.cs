using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data;

namespace BookIt.models
{
    public class Users
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password{ get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }

        public int OrgId { get; set; }
        [ForeignKey("OrgId")]
        public virtual Organization Organization { get; set; }
    }
}
