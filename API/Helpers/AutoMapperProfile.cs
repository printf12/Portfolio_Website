﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos;
using API.Entities;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfile: Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<AddPortfolioDto, Portfolio>();
            CreateMap<EditPortfolioDto, Portfolio>();
            CreateMap<Portfolio, PortfolioResponseDto>();
        }
    }
}
