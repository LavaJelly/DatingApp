using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}

        //El nombre del DbSet "Values" será el nombre que se le dá a la tabla en la BD
        public DbSet<Value> Values { get; set; }
        public DbSet<User> Users { get; set; }
    }
}