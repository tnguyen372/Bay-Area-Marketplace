package demo;

public class InquiryDto {
    public String entryId;
    public String inquiryEmail;
    public String inquiryMessage;

    public InquiryDto(String entryId, String inquiryEmail, String inquiryMessage) {
        this.entryId = entryId;
        this.inquiryEmail = inquiryEmail;
        this.inquiryMessage = inquiryMessage;
    }
}
