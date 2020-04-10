using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using WebApplicationPlateforme.Model.User;

namespace WebApplicationPlateforme.Controllers.UserControllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private UserManager<ApplicationUser> _userManager;
        public UserController(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }
        //GET : /api/User
        [HttpGet]
        public object Getusers()
        {
            var users = _userManager.Users.ToList();
            return users;
        }

        //GET : /api/User/5
        [HttpGet("{id}")]
        public object GetusersById(string Id)
        {
            var user = _userManager.Users.FirstOrDefault(u => u.Id == Id);
            return user;
        }
    }
}