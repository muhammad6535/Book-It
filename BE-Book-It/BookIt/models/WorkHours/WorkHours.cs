using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data;

namespace BookIt.models
{
    public class WorkHours
    {
        public int Id { get; set; }
        public string Day { get; set; }
        public DateTime? WorkFrom { get; set; }
        public DateTime? WorkTo { get; set; }
        public DateTime? BreakFrom { get; set; }
        public DateTime? BreakTo { get; set; }
        public bool IsDayOff { get; set; }
        public int BranchId { set; get; }
        [ForeignKey("BranchId")]
        public virtual Branch Branch { get; set; }

    }
}

