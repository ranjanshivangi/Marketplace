namespace MarketplaceAPI.DTO
{
    public class ShortlistsDTO

    {
        public int ShortlistsId { get; set; }
        public string ManagerEmployeeId { get; set; }
        public string Rrnumber { get; set; }
        public string ShortlistedEmployeeId { get; set; }       
        public string ShortlistedEmployeeName { get; set; }
        public string ShortlistedEmployeeEmail { get; set; }
        public byte ShortlistedEmployeeStatus { get; set; }
        public Array? ShortlistedSkills { get; set; }

        


    }
}
