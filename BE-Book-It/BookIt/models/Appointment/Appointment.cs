using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookIt.models
{
    public class Appointment
    {
        public int Id { get; set; }
        public string CustomerName { get; set; }
        public string CustomerEmail { get; set; }
        public string CustomerPhone { get; set; }
        public int BranchId { get; set; }
        public int ServiceId { get; set; }
        public DateTime? Date { get; set; }

        [ForeignKey("BranchId")]
        public virtual Branch Branch { get; set; }

        //[ForeignKey("ServiceId")]
        //public virtual Service Service { get; set; }
    }



}

