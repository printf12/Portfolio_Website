using API.Helpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class BlogPost
    {        
        public int BlogPostId { get; set; }

        public BlogPostType BlogPostType { get; set; }

        public string Title { get; set; }

        public DateTime? CreationDay { get; set; }

        public string Description { get; set; }
        public virtual ICollection<Comment> Comments { get; set; }
    }
}
