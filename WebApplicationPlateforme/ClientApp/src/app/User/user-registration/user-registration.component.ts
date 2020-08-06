import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../shared/Services/User/user-service.service';
import { ToastrService } from 'ngx-toastr';
import { PrivilegesService } from '../../shared/Services/User/privileges.service';
import { UserDetail } from '../../shared/Models/User/user-detail.model';
import { PrivilegesDetail } from '../../shared/Models/User/privileges-detail.model';
import { AdministrationService } from '../../shared/Services/Administration/administration.service';
import { EtablissementService } from '../../shared/Services/Etablissement/etablissement.service';
import { Etablissement } from '../../shared/Models/Etablissement/etablissement.model';
import { Administration } from '../../shared/Models/Administration/administration.model';
import { RoleService } from '../../shared/Services/User/role.service';
import { Role } from '../../shared/Models/User/role.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private UserService: UserServiceService,
    private toastr: ToastrService,
    private privilegesService: PrivilegesService,
    private administrationservice: AdministrationService,
    private etablissementservice: EtablissementService,
    private RolesService: RoleService
  ) { }

  ngOnInit(): void {
   
    this.UserService.formModel.reset();
    this.GetEtablisssementList();
    this.GetAdmninstrativeList();
    this.getRoles();
    this.getUsersList();
  }

  //Get Users List
  UsersList: UserDetail[] = [];
  getUsersList() {
    this.UserService.GetUsersList().subscribe(res => {
      this.UsersList = res
    })
      
  }


  // Get Roles List

  roles: any[];

  getRoles() {
    this.RolesService.getAllRoles().subscribe(
      (data: any) => {
        data.forEach(obj => obj.selected = false);
        this.roles = data;
       
       
      }
 
    )
  
    
  }


  //Administration test
  bossId: number=null;
  boss: string;
  selectedEtab: boolean = false;
  etabList: Etablissement[] = [];
  etabListAd: Etablissement[] = [];
  etabFinder: boolean = false;
  adFinder: boolean = false;
  nomAdministration: string;
  nomDepartement: string;
  position: string;
  directoretab: string;
  directorad: string
  dir: string;
  admintest(event) {

    this.bossId = event.target.value;
    console.log(this.bossId)

    this.administrationservice.GetById(+this.bossId).subscribe(res => {
      console.log(res.nom)
      this.administartion = res
      this.directorad = res.nomDirecteur;
      if (this.directoretabSelectedRole) {
        this.directoretab = res.nomDirecteur
      
      }
     
    })

    let adlis: Administration[] = [];
    let adlisfiltred: Administration[] = [];
    this.administrationservice.ListAdministration().subscribe(res => {
      adlis = res
      adlisfiltred = adlis.filter(item => item.nom == "الادارة العامة")
      this.dir = adlisfiltred[0].nomDirecteur
      console.log(this.dir)
    })
  
    //Test existence of administration

    if (this.AdministrationList.length > 0) {
      this.adFinder = true;
    }
    else {
      this.adFinder = false
    }


    //Test etab existence

    this.etablissementservice.ListEtablissement().subscribe(res => {
      this.etabList = res
      this.etabListAd = this.etabList.filter(item => item.idAdministration == +this.bossId)

      if (this.etabListAd.length > 0) {
        this.etabFinder = true;
      } else {
        this.etabFinder = false;
      }

   

    })



  }

  //etab test
  etabId: number = null;
  etabName: string = "";
  directorfinder: boolean = false;
  etabdirectorTest: boolean = false;
  etabdirector: string;
  etabnamedirectoretab: string;
  etablissement: Etablissement = new Etablissement();
  etabtest(event) {
    this.etabId = event.target.value;
   
    if (+this.etabId != null) {
      this.etablissementservice.GetById(+this.etabId).subscribe(res => {
        this.etablissement = res

        this.nomDepartement = res.nom
        this.etabdirector = res.nomDirecteur

        if (this.employeeSelectedRole) {
          this.etabName = res.nomDirecteur
        }

        if (this.directoretabSelectedRole) {
          this.etabnamedirectoretab = res.nomDirecteur
        }

       
    
       
        if (this.etabName != null) {
          this.directorfinder == true;

        } else {

        
          this.directorfinder = false;
         
        }


      })
    }
  }
  selectedRole: boolean = false;
  employeeSelectedRole: boolean = false;
  directoretabSelectedRole: boolean = false;
  directoreadSelectedRole: boolean = false;
  directoreGSelectedRole: boolean = false;
  
  updateSelectedRoles(index) {
    this.roles[index].selected = !this.roles[index].selected;
    var x = this.roles.filter(x => x.selected).map(y => y.Name);

    if (index == 0) {
      this.employeeSelectedRole = true;
      this.position = "موظف"
    } else {
      this.employeeSelectedRole = false;
    }

    if (index == 2) {
      this.directoretabSelectedRole = true
      this.position = "مدير قسم"
    } else {
      this.directoretabSelectedRole = false;
    }

    
    if (index == 1) {
      this.directoreadSelectedRole = true
      this.position = "مدير إدارة"
    } else {
      this.directoreadSelectedRole = false
    }

    if (index == 3) {
      this.directoreGSelectedRole = true
      this.position = "مدير عام"
    } else {
      this.directoreGSelectedRole=false
    }

  }
  randomnumbertest: boolean = false;
  randomnumber: number;
  notrandom: boolean = true;
  testrandom: boolean = false
  
  numrandom(event) {
    if (event.target.checked) {
      this.randomnumbertest = true;
      this.notrandom = false;
    
      this.randomnumber = Math.floor(1000 + Math.random() * 9000);
      this.fuser = this.UsersList.filter(item => item.num == this.randomnumber.toString())
      if (this.fuser.length == 0) {
        this.testrandom = true
      } else {
        this.testrandom = false;
      }
    
    }

  

  }
  creatednum: boolean = false;
  numnum: any;
  fuser: any;
  changenum(event) {
    this.numnum = event.target.value;
    console.log(this.numnum)
    console.log(typeof this.numnum)
    if (event.target.value != null) {
      // console.log(this.UsersList.filter(item => item.num == this.numnum).length == 0)
      this.fuser = this.UsersList.filter(item => item.num == this.numnum)

      if (this.fuser.length == 0) {
        this.creatednum = true;
     
      }
    } else {
      this.creatednum = false;
     
    }
  }
  administartion: Administration = new Administration();
  onSubmitPrivileges() {

    var x = this.roles.filter(x => x.selected).map(y => y.name);

    if (this.testrandom || this.creatednum) {



      if (this.employeeSelectedRole) {

        if (this.adFinder == false) {
          this.toastr.error("يجب عليك اختيار إدارة")
        }
        if (this.etabFinder == false) {
          this.toastr.error("يجب عليك اختيار قسم")
        }
        if (this.etabName == null) {
          this.toastr.error("القسم ليس لديه مدير لا يمكنك إضافة موظف بدون مدير")

        }


        if (this.adFinder && this.etabFinder && this.etabName != null) {

          this.UserService.register(x).subscribe(
            (res: any) => {
              if (res.succeeded) {
                this.UserService.formModel.reset();
               this.UserService.formModel.invalid

                this.username = this.UserService.Username;


                if (this.username != '') {
                  this.UserService.GetUserByUserName(this.username).subscribe(res => {
                    this.user = res

                    //Etablissement add director


                    //this.privilege.userId = this.user.id;
                    this.userId = this.user.id
                    this.privilege.addTask = this.addTask;
                    this.privilege.appel = this.appel;
                    this.privilege.commAd = this.commAd;
                    this.privilege.performance = this.performance;
                    this.privilege.rapport = this.Rapport;
                    this.privilege.salaire = this.salaire;
                    this.privilege.serviceEmployee = this.serviceEmployee;
                    this.privilege.settings = this.settings;
                    this.privilege.userid = this.userId
                    this.privilege.id = this.userId
                    this.privilegesService.CreatePrivilege(this.privilege).subscribe(
                      (res: any) => {
                        this.toastr.success('تم إنشاء المستخدم', 'تم التسجيل بنجاح');
                      },
                      err => {
                        this.toastr.error(err, 'فشل في إضافة الامتيازات');
                      })
                  })
                }

              } else {
                res.errors.forEach(element => {
                  switch (element.code) {
                    case 'DuplicateUserName':
                      this.toastr.error('اسم المستخدم مسجل من قبل', 'فشل في التسجيل');
                      break;

                    default:
                      this.toastr.error(element.description, 'فشل في التسجيل');
                      break;
                  }
                });
              }

            },
            err => {
              console.log(err);
            }
          );
        }
      }


      if (this.directoretabSelectedRole) {
        if (this.adFinder == false) {
          this.toastr.error("يجب عليك اختيار إدارة")
        }
        if (this.etabFinder == false) {
          this.toastr.error("يجب عليك اختيار قسم")
        }
        console.log(this.etabdirector)
        if (this.etabnamedirectoretab != null) {
          this.toastr.error("القسم لديه بالفعل مدير")

        }
        if (this.adFinder && this.etabFinder && this.etabnamedirectoretab == null) {
          this.etabdirectorTest = false;
          this.UserService.register(x).subscribe(
            (res: any) => {
              if (res.succeeded) {
                this.UserService.formModel.reset();
                this.username = this.UserService.Username;


                if (this.username != '') {
                  this.UserService.GetUserByUserName(this.username).subscribe(res => {
                    this.user = res

                    //Etablissement add director

                    this.etablissement.nomDirecteur = this.user.fullName;
                    console.log(this.user.fullName)
                    console.log(this.etablissement.nomDirecteur)
                    console.log(this.user.fullName)

                    this.etabdirectorTest = true;
                    this.etablissementservice.PutObservable(this.etablissement).subscribe(res => {

                    })



                    //this.privilege.userId = this.user.id;
                    this.userId = this.user.id
                    this.privilege.addTask = this.addTask;
                    this.privilege.appel = this.appel;
                    this.privilege.commAd = this.commAd;
                    this.privilege.performance = this.performance;
                    this.privilege.rapport = this.Rapport;
                    this.privilege.salaire = this.salaire;
                    this.privilege.serviceEmployee = this.serviceEmployee;
                    this.privilege.settings = this.settings;
                    this.privilege.userid = this.userId
                    this.privilege.id = this.userId
                    this.privilegesService.CreatePrivilege(this.privilege).subscribe(
                      (res: any) => {
                        this.toastr.success('تم إنشاء المستخدم', 'تم التسجيل بنجاح');
                      },
                      err => {
                        this.toastr.error(err, 'فشل في إضافة الامتيازات');
                      })
                  })
                }

              } else {
                res.errors.forEach(element => {
                  switch (element.code) {
                    case 'DuplicateUserName':
                      this.toastr.error('اسم المستخدم مسجل من قبل', 'فشل في التسجيل');
                      break;

                    default:
                      this.toastr.error(element.description, 'فشل في التسجيل');
                      break;
                  }
                });
              }

            },
            err => {
              console.log(err);
            }
          );
        }
      }
      let usersLis: UserDetail[] = []
      let usersListfiltred: UserDetail[] = []
      if (this.directoreGSelectedRole) {
        this.UserService.GetUsersList().subscribe(res => {
          usersLis = res
          usersListfiltred = usersLis.filter(item => item.position == "مدير عام")
          if (usersListfiltred.length > 0) {
            this.toastr.error("لا يمكنك إضافة مدير عام موجود من قبل")
          }

          else {

            this.UserService.register(x).subscribe(
              (res: any) => {
                if (res.succeeded) {
                  this.UserService.formModel.reset();
                  this.username = this.UserService.Username;


                  if (this.username != '') {
                    this.UserService.GetUserByUserName(this.username).subscribe(res => {
                      this.user = res

                      //Etablissement add director

                      this.administartion.nom = "الادارة العامة"
                      this.administartion.description = "الادارة العامة"
                      this.administartion.nomDirecteur = this.user.fullName
                      this.administrationservice.AddAdministration(this.administartion).subscribe(res => {

                      })



                      //this.privilege.userId = this.user.id;
                      this.userId = this.user.id
                      this.privilege.addTask = this.addTask;
                      this.privilege.appel = this.appel;
                      this.privilege.commAd = this.commAd;
                      this.privilege.performance = this.performance;
                      this.privilege.rapport = this.Rapport;
                      this.privilege.salaire = this.salaire;
                      this.privilege.serviceEmployee = this.serviceEmployee;
                      this.privilege.settings = this.settings;
                      this.privilege.userid = this.userId
                      this.privilege.id = this.userId
                      this.privilegesService.CreatePrivilege(this.privilege).subscribe(
                        (res: any) => {
                          this.toastr.success('تم إنشاء المستخدم', 'تم التسجيل بنجاح');
                        },
                        err => {
                          this.toastr.error(err, 'فشل في إضافة الامتيازات');
                        })
                    })
                  }

                } else {
                  res.errors.forEach(element => {
                    switch (element.code) {
                      case 'DuplicateUserName':
                        this.toastr.error('اسم المستخدم مسجل من قبل', 'فشل في التسجيل');
                        break;

                      default:
                        this.toastr.error(element.description, 'فشل في التسجيل');
                        break;
                    }
                  });
                }

              },
              err => {
                console.log(err);
              }
            );
          }
        })
      }

      if (this.directoreadSelectedRole) {
        if (this.adFinder == false) {
          this.toastr.error("يجب عليك اختيار إدارة")
        }

        if (this.adFinder) {
          if (this.directorad == null) {
            this.UserService.register(x).subscribe(
              (res: any) => {
                if (res.succeeded) {
                  this.UserService.formModel.reset();
                  this.username = this.UserService.Username;


                  if (this.username != '') {
                    this.UserService.GetUserByUserName(this.username).subscribe(res => {
                      this.user = res

                      //Etablissement add director
                      this.administartion.nomDirecteur = this.user.fullName
                      this.administrationservice.PutObservable(this.administartion).subscribe(res => {
                        console.log("done")
                      })




                      //this.privilege.userId = this.user.id;
                      this.userId = this.user.id
                      this.privilege.addTask = this.addTask;
                      this.privilege.appel = this.appel;
                      this.privilege.commAd = this.commAd;
                      this.privilege.performance = this.performance;
                      this.privilege.rapport = this.Rapport;
                      this.privilege.salaire = this.salaire;
                      this.privilege.serviceEmployee = this.serviceEmployee;
                      this.privilege.settings = this.settings;
                      this.privilege.userid = this.userId
                      this.privilege.id = this.userId
                      this.privilegesService.CreatePrivilege(this.privilege).subscribe(
                        (res: any) => {
                          this.toastr.success('تم إنشاء المستخدم', 'تم التسجيل بنجاح');
                        },
                        err => {
                          this.toastr.error(err, 'فشل في إضافة الامتيازات');
                        })
                    })
                  }

                } else {
                  res.errors.forEach(element => {
                    switch (element.code) {
                      case 'DuplicateUserName':
                        this.toastr.error('اسم المستخدم مسجل من قبل', 'فشل في التسجيل');
                        break;

                      default:
                        this.toastr.error(element.description, 'فشل في التسجيل');
                        break;
                    }
                  });
                }

              },
              err => {
                console.log(err);
              }
            );
          } else {
            this.toastr.error("الإدارة لديها مدير")
          }
        }
      }

    } else {
      this.toastr.error("الرقم الوظيفي موجود من قبل")
    }
    
  }


  //disable checkboxes wehen one of them selected

  isChecked;
  isCheckedName;
  onChange(e) {
    this.isChecked = !this.isChecked;
    this.isCheckedName = e.target.name;
  }

  // Get Etablissement List

  EtablissementList: Etablissement[] = [];

  GetEtablisssementList() {
    this.etablissementservice.ListEtablissement().subscribe(res => {
      this.EtablissementList = res

    })

  }

  // convert id Etablissement
  ConvertedEtabId: number;
  selectInput1(event) {
    let selected = event.target.value;
    if (selected) {
      console.log(typeof parseInt(selected))
      return parseInt(selected)

    } else {
      return parseInt(selected)
    }
  }

  // convert idAdmnistration
  ConvertedId: number;
  selectInput2(event) {
    let selected = event.target.value;
    if (selected) {
      return parseInt(selected)
    } else {
      return parseInt(selected)
    }
  }

  //Administration Liste

  AdministrationList: Administration[] = [];

  GetAdmninstrativeList() {
    this.administrationservice.ListAdministration().subscribe(res => {
      this.AdministrationList=res
    })
  }
  x:any
  selectInput4(event) {
    this.x = event.target.value;
    console.log(this.x)
  }
  //Register User
  username: string;
  onSubmit() {
    if (this.adFinder == false) {
      this.toastr.error("يجب عليك اختيار الإدارة")
    }
     if (this.etabFinder == false) {
       this.toastr.error("يجب عليك اختيار قسم")
    }
     if (this.directorfinder == false) {
       this.toastr.error("القسم ليس لديه مدير لا يمكنك إضافة موظف بدون مدير")

    }
    console.log(this.etabFinder, this.adFinder, this.directorfinder)
    if (this.adFinder && this.etabFinder && this.directorfinder) {
      var x = this.roles.filter(x => x.selected).map(y => y.name);
      // var x = this.roles.filter(x => x.selected).map(y=>y.name)

      this.UserService.register(x).subscribe(

        (res: any) => {
          if (res.succeeded) {
            this.UserService.formModel.reset();
            this.username = this.UserService.Username;
            this.GetUserByUserName(this.username)
            this.onSubmitPrivileges();
            this.toastr.success('تم إنشاء المستخدم', 'تم التسجيل بنجاح');
          } else {
            res.errors.forEach(element => {
              switch (element.code) {
                case 'DuplicateUserName':
                  this.toastr.error('اسم المستخدم مسجل من قبل', 'فشل في التسجيل');
                  break;

                default:
                  this.toastr.error(element.description, 'فشل في التسجيل');
                  break;
              }
            });
          }
        },
        err => {
          console.log(err);
        }
      );
    } else
      this.toastr.error("echec")
  }

  // Get User By UserName
  user: UserDetail = new UserDetail();
  userId: string;
  GetUserByUserName(Username:string) {
    if (this.username != '') {
      this.UserService.GetUserByUserName(Username).subscribe(res => {
        this.user = res
        //this.privilege.userId = this.user.id;
        this.userId = this.user.id
    })
      }
  }


  //Submit Privileges
  privilege: PrivilegesDetail = new PrivilegesDetail();
  settings: number = 0;

  onSelect1(event) {
    if (event.target.checked) {
      this.settings = 1

    }
    else
      this.settings = 0
  }

  addTask: number = 0;
  onSelect2(event) {
    if (event.target.checked) {
      this.addTask = 1

    }
    else
      this.addTask = 0
  }

  Rapport: number = 0;
  onSelect3(event) {
    if (event.target.checked) {
      this.Rapport=1

    }
    else
      this.Rapport =0
  }

  commAd: number = 0;
  onSelect4(event) {
    if (event.target.checked) {
      this.commAd=1

    }
    else
      this.commAd=0
  }

  appel: number = 0;
  onSelect5(event) {
    if (event.target.checked) {
      this.appel = 1;

    }
    else
      this.appel=0
  }

  serviceEmployee: number = 0;
  onSelect6(event) {
    if (event.target.checked) {
      this.serviceEmployee = 1

    }
    else
      this.serviceEmployee=0
  }

  salaire: number = 0;
  onSelect7(event) {
    if (event.target.checked) {
      this.salaire = 1;

    }
    else
      this.salaire=0
  }

  performance: number = 0;
  onSelect8(event) {
    if (event.target.checked) {
      this.performance = 1;
    }
    else
      this.performance=0
  }


}
