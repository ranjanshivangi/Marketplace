USE [Marketplace]
GO

/****** Object:  Table [Assignments].[ShortlistedSkills]    Script Date: 4/2/2023 10:52:04 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [Assignments].[ShortlistedSkills](
	[ShortlistsId] [int] NOT NULL,
	[EmployeeSkillId] [int] NOT NULL,
	[Id] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_ShortlistedSkills] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [Assignments].[ShortlistedSkills]  WITH CHECK ADD  CONSTRAINT [FK_ShortlistedSkills_EmployeesSkills] FOREIGN KEY([EmployeeSkillId])
REFERENCES [Profiles].[EmployeesSkills] ([SkillId])
GO

ALTER TABLE [Assignments].[ShortlistedSkills] CHECK CONSTRAINT [FK_ShortlistedSkills_EmployeesSkills]
GO

ALTER TABLE [Assignments].[ShortlistedSkills]  WITH CHECK ADD  CONSTRAINT [FK_ShortlistedSkills_Shortlists] FOREIGN KEY([ShortlistsId])
REFERENCES [Assignments].[Shortlists] ([ShortlistsId])
GO

ALTER TABLE [Assignments].[ShortlistedSkills] CHECK CONSTRAINT [FK_ShortlistedSkills_Shortlists]
GO


