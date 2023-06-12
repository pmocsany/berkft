//*
//* File: mainFrame.java
//* Author: Mócsány Petra
//* Copyright: 2023, Mócsány Petra
//* Group: Szoft I/E/2
//* Date: 2022-06-12
//* Github: https://github.com/pmocsany/
//* Licenc: GNU GPL
//*


import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import java.awt.BorderLayout;
import java.awt.GridLayout;
import java.awt.Color;
import java.awt.FlowLayout;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class MainFrame extends JFrame implements ActionListener {
    
    JButton nameBtn;
    JButton addressBtn;
    JButton idBtn;
    JButton bornBtn;
    JButton exitBtn;
    JPanel centerPnl;

    MainFrame() {

        super( "Dolgozók" );
        initComponents();
    }

    private void initComponents() {

        this.setSize( 500, 400 );
        this.setLocationRelativeTo( null );
        this.setDefaultCloseOperation( this.DO_NOTHING_ON_CLOSE );
        this.setLayout( new GridLayout( 1, 1 ) );

        JPanel mainPnl = new JPanel();
        mainPnl.setLayout( new BorderLayout() );
        this.add( mainPnl );

        JPanel westPnl = new JPanel();
        westPnl.setSize( 30, 340 );
        westPnl.setBackground( Color.yellow );
        mainPnl.add( westPnl, BorderLayout.WEST );

        JPanel northPnl = new JPanel();
        northPnl.setSize( 500, 30 );
        northPnl.setBackground( Color.yellow );
        mainPnl.add( northPnl, BorderLayout.NORTH );

        JPanel eastPnl = new JPanel();
        eastPnl.setSize( 30, 340 );
        eastPnl.setBackground( Color.yellow );
        mainPnl.add( eastPnl, BorderLayout.EAST );

        JPanel southPnl = new JPanel();
        southPnl.setSize( 500, 30 );
        southPnl.setBackground( Color.yellow );
        southPnl.setLayout( new FlowLayout( FlowLayout.RIGHT ) );
        mainPnl.add( southPnl, BorderLayout.SOUTH );

        nameBtn = new JButton( "Név" );
        addressBtn = new JButton( "Lakcím" );
        idBtn = new JButton( "azonosító" );
        bornBtn = new JButton( "születésidátum" );
        exitBtn = new JButton( "Kilép" );
        southPnl.add( nameBtn );
        southPnl.add( addressBtn );
        southPnl.add( bornBtn );
        southPnl.add( exitBtn );
        nameBtn.addActionListener( this );
        addressBtn.addActionListener( this );
        idBtn.addActionListener( this );
        bornBtn.addActionListener( this );
        exitBtn.addActionListener( this );


        centerPnl = new JPanel();
        centerPnl.setBackground( Color.lightGray );
        mainPnl.add( centerPnl, BorderLayout.CENTER );


    }

    @Override
    public void actionPerformed( ActionEvent event ) {
  
        if( event.getSource() == exitBtn ) {

            System.exit( 0 );

        }else if( event.getSource() == nameBtn ) {

            centerPnl.setBackground( Empl.name );

        }else if( event.getSource() == addressBtn ) {

            centerPnl.setBackground( Empl.address );

        }else if(  event.getSource() == idBtn ) {

            centerPnl.setBackground( Empl.id);
        }
    }
}