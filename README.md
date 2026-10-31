## Blazor readme:
- dotnet add package Microsoft.EntityFrameworkCore --version 8.0.32
- dotnet add package Microsoft.EntityFrameworkCore.SqlServer --version 8.0.32
- dotnet add package Microsoft.EntityFrameworkCore.Design --version 8.0.32

### Next step: Restore and build
- dotnet restore
- dotnet build

### Next step: Add your Data and Models
- and then build

### Next step: Run the migrations:
- dotenet ef migrations add InitialCreate

### Next step: Run server:
- dotnet ef database update
  

### To connect to sql server express on terminal:
- sqlcmd -S ".\SQLEXPRESS" -E

### Execute queries without even entering interactive mode:
- sqlcmd -S ".\SQLEXPRESS" -E -Q "SELECT name FROM sys.databases;"


### Check whether the migration worked:
- dotnet ef migrations add InitialCreate
- dotnet ef database update