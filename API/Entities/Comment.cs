using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Comment
    {
       
        public int Id { get; set; }
        public string CommentText { get; set; }
        public string CommentedBy { get; set; }
        public string CommentedAt { get; set; }
        public string Email { get; set; }
        public virtual BlogPost BlogPostId { get; set; }
    }
}
