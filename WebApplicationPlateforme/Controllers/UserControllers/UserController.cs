using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplicationPlateforme.Data;
using WebApplicationPlateforme.Model.User;

namespace WebApplicationPlateforme.Controllers.UserControllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private UserManager<ApplicationUser> _userManager;
        private readonly ApplicationDbContext _context;
        public UserController(UserManager<ApplicationUser> userManager, ApplicationDbContext context)
        {
            _userManager = userManager;
            _context = context;
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


        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteUser(string id)
        {
            var user = await _userManager.FindByIdAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            try
            {
                var result = await _userManager.DeleteAsync(user);
                
                return Ok(result);
            }
            catch (Exception ex)
            {

                throw ex;
            }

        }

        [HttpPut("{id}")]
        //GET : /api/User/5

        public async Task<Object> PutUser(ApplicationUserModel model)
        {
            /* var user = _userManager.Users.FirstOrDefault(u => u.Id == Id);

             return user;*/
            ApplicationUser user = await _userManager.FindByIdAsync(model.Id);

            user.UserName = model.UserName;
            user.Email = model.Email;
            user.RegistreCivil = model.RegistreCivil;
            user.FullNameEnglish = model.FullNameEnglish;
            user.FullName = model.FullName;
            user.adresse = model.adresse;
            user.PhoneNumber = model.PhoneNumber;
            user.Tel = model.Tel;
            user.Statut = model.Statut;
            user.Nationalite = model.Nationalite;
            user.Religion = model.Religion;
            user.Sexe = model.Sexe;
            user.DateNaissance = model.DateNaissance;
            user.LieuNaissance = model.LieuNaissance;
            user.Passeport = model.Passeport;
            user.TypeSang = model.TypeSang;
            user.Num = model.Num;
            user.Emploi = model.Emploi;
            user.Rang = model.Rang;
            user.TypeEmploi = model.TypeEmploi;
            user.NomAdministration = model.NomAdministration;
            user.NomDepartement = model.NomDepartement;
            user.Unite = model.Unite;
            user.Qualification = model.Qualification;
            user.TypeQualification = model.TypeQualification;
            user.FaculteEcole = model.FaculteEcole;
            user.DateQualification = model.DateQualification;
            user.Specialite = model.Specialite;
            user.Paysetude = model.Paysetude;
            user.Mention = model.Mention;
            user.Classement = model.Classement;
            user.Degre = model.Degre;
            user.Salaire = model.Salaire;
            user.Indemnite = model.Indemnite;
            user.AutreIndemnite = model.AutreIndemnite;
            user.HeureArrive = model.HeureArrive;
            user.HeureDepart = model.HeureDepart;
            user.Photo = model.Photo;
            user.IdAdministration = model.IdAdministration;
            user.IdDepartement = model.IdDepartement;
            var result = await _userManager.UpdateAsync(user);
            return user;
        }
        /*
        [HttpPut("{id}")]
         public async Task<IActionResult> PutUser(string id,ApplicationUser user)
         {
             user = await _userManager.FindByIdAsync(id);
             if(user == null)
             {
                 return NotFound();
             }

             try
             {
                 var result = await _userManager.UpdateAsync(user);

                 return Ok(result);
             }
             catch(Exception ex){
                 throw ex;
             }

         }
         */


    }

}