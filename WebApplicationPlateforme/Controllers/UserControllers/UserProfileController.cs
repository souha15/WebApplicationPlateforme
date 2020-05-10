using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.HttpSys;
using WebApplicationPlateforme.Model.User;

namespace WebApplicationPlateforme.Controllers.UserControllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private UserManager<ApplicationUser> _userManager;
        public UserProfileController(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        //GET : /api/UserProfile
        public async Task<Object> GetUserProfile()
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);
            return new
            {
                user.FullName,
                user.Email,
                user.UserName,
                user.Id,
               
                

            };
        }

        [HttpGet]
        [Authorize(Roles = "ADMINISTRATEUR", AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("ForAdmin")]
        public string GetForAdmin()
        {
            return "Web method for Admin";
        }

        [HttpGet]
        [Authorize(Roles = "EMPLOYEE", AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("ForEmployee")]
        public string GetForEmployee()
        {
            return "Web method for Employee";
        }

        [HttpGet]
        [Authorize(Roles = "DIRECTORE", AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("ForDirectorEtab")]
        public string GetForDirectorEtab()
        {
            return "Web method for etablissement Director";
        }

        [HttpGet]
        [Authorize(Roles = "DIRECTORA", AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("ForDirectorAdmin")]
        public string GetForDirectorAdmin()
        {
            return "Web method for administrative director";
        }

        [HttpGet]
        [Authorize(Roles = "DIRECTORG", AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("ForDirectorGeneral")]
        public string GetForDirectorGeneral()
        {
            return "Web method for general director";
        }

       /* [HttpGet]
        [Authorize(Roles = "Admin", AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("ForAdminis")]
        public string GetForAdminis()
        {
            return "Web method for general director";
        }
        */


        /*  [HttpGet]
          [Authorize(Roles = "Director,Employee", AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
          [Route("ForDirectorOrEmployee")]
          public string GetForDirectorOrEmployee()
          {
              return "Web method for Director or Employee";
          }

      */

    }
}