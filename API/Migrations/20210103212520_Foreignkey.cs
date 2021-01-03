using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Migrations
{
    public partial class Foreignkey : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "BlogPost_Id",
                table: "Comment",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Comment",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Comment_BlogPost_Id",
                table: "Comment",
                column: "BlogPost_Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Comment_BlogPost_BlogPost_Id",
                table: "Comment",
                column: "BlogPost_Id",
                principalTable: "BlogPost",
                principalColumn: "BlogPostId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comment_BlogPost_BlogPost_Id",
                table: "Comment");

            migrationBuilder.DropIndex(
                name: "IX_Comment_BlogPost_Id",
                table: "Comment");

            migrationBuilder.DropColumn(
                name: "BlogPost_Id",
                table: "Comment");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Comment");
        }
    }
}
