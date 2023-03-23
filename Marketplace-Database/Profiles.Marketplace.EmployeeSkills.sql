USE [Marketplace]
GO

/****** Object:  Table [Profiles].[EmployeesSkills]    Script Date: 23-03-2023 17:24:20 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [Profiles].[EmployeesSkills](
	[EmployeeId] [nvarchar](12) NOT NULL,
	[SkillId] [int] NOT NULL,
	[LastUsed] [date] NOT NULL,
	[ExperienceInMonths] [int] NOT NULL,
	[Proficience] [nvarchar](50) NOT NULL,
	[SkillSource] [tinyint] NOT NULL,
	[SkillSourceId] [int] NOT NULL,
 CONSTRAINT [PK_EmployeesSkills] PRIMARY KEY CLUSTERED 
(
	[SkillId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [Profiles].[EmployeesSkills]  WITH CHECK ADD  CONSTRAINT [FK_EmployeesSkills_Employees] FOREIGN KEY([EmployeeId])
REFERENCES [Master].[Employees] ([EmployeeId])
GO

ALTER TABLE [Profiles].[EmployeesSkills] CHECK CONSTRAINT [FK_EmployeesSkills_Employees]
GO

ALTER TABLE [Profiles].[EmployeesSkills]  WITH CHECK ADD  CONSTRAINT [FK_EmployeesSkills_Skills] FOREIGN KEY([SkillId])
REFERENCES [Master].[Skills] ([SkillId])
GO

ALTER TABLE [Profiles].[EmployeesSkills] CHECK CONSTRAINT [FK_EmployeesSkills_Skills]
GO


