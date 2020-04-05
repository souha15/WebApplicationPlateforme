using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using WebApplicationPlateforme.Model.User;

namespace WebApplicationPlateforme.Controllers.UserControllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationUserController : ControllerBase
    {
        private UserManager<ApplicationUser> _userManager;
       // private SignInManager<ApplicationUser> _singInManager;

        public ApplicationUserController(UserManager<ApplicationUser> userManager/*, SignInManager<ApplicationUser> signInManager*/)
        {
            _userManager = userManager;
            //_singInManager = signInManager;
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
                Administration=model.Administration,
                Departement=model.Departement,
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
                Photo=model.Photo
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


    }
}