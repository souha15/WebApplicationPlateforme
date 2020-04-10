using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using WebApplicationPlateforme.Model.User;

namespace WebApplicationPlateforme.Controllers.UserControllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationUserController : ControllerBase
    {
        private UserManager<ApplicationUser> _userManager;
        // private SignInManager<ApplicationUser> _singInManager;
        private readonly ApplicationSettings _appSettings;

        public ApplicationUserController(UserManager<ApplicationUser> userManager, IOptions<ApplicationSettings> appSettings/*, SignInManager<ApplicationUser> signInManager*/)
        {
            _userManager = userManager;
            //_singInManager = signInManager;
            _appSettings = appSettings.Value;
        }

        [HttpPost]
        [Route("Register")]
        //POST : /api/ApplicationUser/Register
        public async Task<Object> PostApplicationUser(ApplicationUserModel model)
        {
            var applicationUser = new ApplicationUser()
            {
                UserName = model.UserName,
                Email = model.Email,
                RegistreCivil = model.RegistreCivil,
                FullNameEnglish = model.FullNameEnglish,
                FullName = model.FullName,
                adresse = model.adresse,
                PhoneNumber = model.PhoneNumber,
                Tel = model.Tel,
                Statut = model.Statut,
                Nationalite = model.Nationalite,
                Religion = model.Religion,
                Sexe = model.Sexe,
                DateNaissance = model.DateNaissance,
                LieuNaissance = model.LieuNaissance,
                Passeport = model.Passeport,
                TypeSang = model.TypeSang,
                Num = model.Num,
                Emploi = model.Emploi,
                Rang = model.Rang,
                TypeEmploi=model.TypeEmploi,
                NomAdministration = model.NomAdministration,
                NomDepartement = model.NomDepartement,
                Unite=model.Unite,
                Qualification=model.Qualification,
                TypeQualification=model.TypeQualification,
                FaculteEcole= model.FaculteEcole,
                DateQualification=model.DateQualification,
                Specialite=model.Specialite,
                Paysetude=model.Paysetude,
                Mention=model.Mention,
                Classement=model.Classement,
                Degre=model.Degre,
                Salaire=model.Salaire,
                Indemnite=model.Indemnite,
                AutreIndemnite=model.AutreIndemnite,
                HeureArrive=model.HeureArrive,
                HeureDepart=model.HeureDepart,
                Photo=model.Photo,
                IdAdministration=model.IdAdministration,
                IdDepartement=model.IdDepartement
            };

            try
            {
                var result = await _userManager.CreateAsync(applicationUser, model.Password);
                return Ok(result);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        [HttpPost]
        [Route("Login")]
        //POST : /api/ApplicationUser/Login
        public async Task<IActionResult> Login(LoginModel model)
        {
            var user = await _userManager.FindByNameAsync(model.UserName);
            if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
            {
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim("UserID",user.Id.ToString())
                    }),
                    Expires = DateTime.UtcNow.AddDays(1),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_appSettings.JWT_Secret)), SecurityAlgorithms.HmacSha256Signature)
                };
                var tokenHandler = new JwtSecurityTokenHandler();
                var securityToken = tokenHandler.CreateToken(tokenDescriptor);
                var token = tokenHandler.WriteToken(securityToken);
                return Ok(new { token });
            }
            else
                return BadRequest(new { message = "Username or password is incorrect." });
        }


    
}
}