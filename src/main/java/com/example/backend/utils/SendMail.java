package com.example.backend.utils;

import java.io.IOException;
import java.util.Date;
import java.util.Properties;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;

/**
 *
 * @author LEDTIN
 */
public class SendMail {

    @Autowired
    public JavaMailSender emailSender;

    public void sendMail(String emailTo, String subject, String content) throws AddressException, MessagingException, IOException {

        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");

        Session session = Session.getInstance(props, new javax.mail.Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication("ledtinnotify@gmail.com", "noti1234");
            }
        });
        Message msg = new MimeMessage(session);
        msg.setFrom(new InternetAddress("ledtinnotify@gmail.com", false));

        msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(emailTo));
        msg.setSubject(subject);
        msg.setContent(content, "text/html");
        msg.setSentDate(new Date());

        Transport.send(msg);

    }

}
