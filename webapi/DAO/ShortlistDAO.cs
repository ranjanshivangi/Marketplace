namespace MarketplaceAPI.DAO
{
    public class ShortlistDAO
    {
        public string ManagerEmployeeId { get; set; } = null!;

        public string ShortlistedEmployeeId { get; set; } = null!;

        public int ShortlistsId { get; set; }

        public string Rrnumber { get; set; } = null!;

        public int[] SkillIds { get; set; }
    }
}
