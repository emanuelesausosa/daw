using ReviewsApp.DataAccess.DTOs;
using ReviewsApp.DataAccess.Factory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace ReviewsApp.Web.Controllers
{
    [RoutePrefix("posts")]
    public class PostsController : ApiController
    {
        private readonly PostsManager _postsManager;
        public PostsController()
        {
            _postsManager = new PostsManager();
        }


        [Route("all")]
        [HttpGet]
        public async Task<IHttpActionResult> GetAllPosts()
        {
            var data = await _postsManager.GetAllPosts();
            return Ok(data);
        }

        [HttpPost]
        [Route("new")]
        public async Task<IHttpActionResult> AddPost(DTOPost post)
        {
            var result = await _postsManager.AddPost(post);
            return Ok(result);
        }
    }
}
