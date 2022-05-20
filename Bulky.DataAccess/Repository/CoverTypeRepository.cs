using Bulky.Models;
using Bulky.DataAccess.Repository.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bulky.DataAccess.Data;

namespace Bulky.DataAccess.Repository
{
    class CoverTypeRepository: Repository<CoverType>, ICoverTypeRepository
    {
       
            private ApplicationDbContext _db;

            public CoverTypeRepository(ApplicationDbContext db) : base(db)
            {
                _db = db;
            }
            public void Save()
            {
                _db.SaveChanges();
            }

            public void Update(CoverType obj)
            {
                _db.CoverTypes.Update(obj);
            }
        }
    }

