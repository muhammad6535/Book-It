using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookIt.models
{
    public class Branch
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }

        public int OrgId { set; get; }
        [ForeignKey("OrgId")]
        public virtual Organization Organization { get; set; }
    }
}
