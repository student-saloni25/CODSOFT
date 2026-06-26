import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class ATMInterface extends JFrame implements ActionListener {

    BankAccount account = new BankAccount(10000);

    JLabel balanceLabel;
    JTextField amountField;

    JButton withdrawBtn, depositBtn, checkBtn, exitBtn;

    public ATMInterface() {

        setTitle("ATM Interface");
        setSize(450,350);
        setLayout(null);

        JLabel title = new JLabel("ATM MACHINE");
        title.setFont(new Font("Arial",Font.BOLD,22));
        title.setBounds(130,20,200,30);
        add(title);

        balanceLabel = new JLabel("Balance : ₹10000");
        balanceLabel.setBounds(120,70,200,30);
        add(balanceLabel);

        JLabel amount = new JLabel("Enter Amount:");
        amount.setBounds(50,120,120,25);
        add(amount);

        amountField = new JTextField();
        amountField.setBounds(180,120,150,30);
        add(amountField);

        withdrawBtn = new JButton("Withdraw");
        withdrawBtn.setBounds(40,180,150,40);

        depositBtn = new JButton("Deposit");
        depositBtn.setBounds(220,180,150,40);

        checkBtn = new JButton("Check Balance");
        checkBtn.setBounds(40,240,150,40);

        exitBtn = new JButton("Exit");
        exitBtn.setBounds(220,240,150,40);

        add(withdrawBtn);
        add(depositBtn);
        add(checkBtn);
        add(exitBtn);

        withdrawBtn.addActionListener(this);
        depositBtn.addActionListener(this);
        checkBtn.addActionListener(this);
        exitBtn.addActionListener(this);

        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setVisible(true);
    }

    public void actionPerformed(ActionEvent e) {

        if(e.getSource()==withdrawBtn){

            try{

                double amount=Double.parseDouble(amountField.getText());

                if(account.withdraw(amount))
                    JOptionPane.showMessageDialog(this,"Withdrawal Successful");
                else
                    JOptionPane.showMessageDialog(this,"Insufficient Balance");

            }catch(Exception ex){
                JOptionPane.showMessageDialog(this,"Enter Valid Amount");
            }

        }

        if(e.getSource()==depositBtn){

            try{

                double amount=Double.parseDouble(amountField.getText());

                if(account.deposit(amount))
                    JOptionPane.showMessageDialog(this,"Deposit Successful");
                else
                    JOptionPane.showMessageDialog(this,"Invalid Amount");

            }catch(Exception ex){
                JOptionPane.showMessageDialog(this,"Enter Valid Amount");
            }

        }

        if(e.getSource()==checkBtn){

            JOptionPane.showMessageDialog(this,
            "Current Balance : ₹"+account.getBalance());

        }

        if(e.getSource()==exitBtn){

            System.exit(0);

        }

        balanceLabel.setText("Balance : ₹"+account.getBalance());
        amountField.setText("");

    }
}