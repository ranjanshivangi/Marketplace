namespace MarketplaceAPI.DAO
{
    public class PastEmploymentDAO
    {
        public string EmployeeId { get; set; } = null!;

        public int XemployeerId { get; set; }

        public string XemployeerCompanyName { get; set; } = null!;

        public string XstartDesignation { get; set; } = null!;

        public DateTime StartDate { get; set; }

        public string XlastDesignation { get; set; } = null!;

        public DateTime EndDate { get; set; }

        public string Notes { get; set; } = null!;
    }
}
