using Bulky.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bulky.DataAccess.Repository.IRepository
{
    public interface IOrderHeaderRepository : IRepository<OrderHeader>
    {
        void Update(OrderHeader obj);
        void UpdateStatus(int orderId, string orderStatus, string paymentStatus=null);
        public void UpdateStripePaymentId(int id, string sessionId, string paymentIntendId);


    }
}
