using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookIt.models
{
    public class ServiceType
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int TimeAvg { get; set; }

        public int BranchId { get; set; }

        [ForeignKey("BranchId")]
        public virtual Branch Branch { get; set; }
    }



}

