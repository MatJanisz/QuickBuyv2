﻿using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.DA.Models
{
    public class User : IdentityUser
    {
        public float AmountOfMoney { get; set; }
        public bool IsAdmin { get; set; }
        public ICollection<Product> Products { get; set; }
        public ICollection<UserProduct> UserProducts { get; set; }
    }
}
