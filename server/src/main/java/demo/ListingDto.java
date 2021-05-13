package demo;

public class ListingDto {
    public String email;
    public String title;
    public String type;
    public String description;
    public Double price;

    public ListingDto(String email, String title, String type, String description, Double price) {
        this.email = email;
        this.title = title;
        this.type = type;
        this.description = description;
        this.price = price;
    }
}
