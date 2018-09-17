using ReviewsApp.DataAccess.DTOs;
using ReviewsApp.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReviewsApp.DataAccess.Factory
{
    public class PostsManager
    {
        private readonly ReviewsEntities _context;
        public PostsManager()
        {
            _context = new ReviewsEntities();
        }

        public async Task<Posts[]> GetAllPosts() {
            return await _context.Posts.ToArrayAsync();
        }

        public async Task<bool> AddPost(DTOPost post) {

            try
            {
                var postEntity = new Posts();
                postEntity.Autor = post.Autor;
                postEntity.FechaPublicacion = DateTime.Now;
                postEntity.Imagen = post.Imagen;
                postEntity.Resumen = post.Resumen;
                postEntity.Titulo = post.Titulo;
                postEntity.UrlVideo = post.UrlVideo;

                _context.Posts.Add(postEntity);

                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
