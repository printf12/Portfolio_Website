using API.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }
        public virtual DbSet<User> User { get; set; }
        public virtual DbSet<Portfolio> Portfolio { get; set; }

        public virtual DbSet<BlogPost> BlogPost { get; set; }
        public virtual DbSet<Comment> Comment { get; set; }

    }
}

