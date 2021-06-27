import React, {useEffect, useState} from 'react';
import {Container, Row, Col, InputGroup, FormControl, ButtonGroup, Button, Card} from "react-bootstrap";
import Loader from 'react-loader-spinner';
import { isNaN } from "lodash";

import Web3 from "web3";
import TruffleContract from '@truffle/contract';
import SimpleStorage from './contracts/SimpleStorage.json';

import "./css/bootstrap-4.5.3-dist/css/bootstrap.min.css";

function DApp() {
    
    //1.
    const [web3, setWeb3] = useState(null);
    const [btnText, setBtnText] = useState('Connect');
    const [accounts, setAccounts] = useState([]);
    /////
    
    //2.
    const [contract, setContract] = useState(null);
    /////
    
    //3.
    const [storedData, setStoredData] = useState('');
    /////
    
    //4.
    const [val, setVal] = useState(0);
    /////
    
    
    const handleConnect = async () => {
        
        if (window.ethereum !== undefined && web3 === null) {
            
            const web3 = new Web3(window.ethereum);
            
            try {
                const accounts = await window.ethereum.enable();
                
                console.log(accounts[0]);
                
                //1.
                setWeb3(web3);
                setBtnText('Disconnect');
                setAccounts(accounts);
                /////
                
                //2.
                const simpleStorage = TruffleContract(SimpleStorage);
                simpleStorage.setProvider(web3.currentProvider);
                const instance = await simpleStorage.deployed();
                
                console.log(instance.address);
                
                setContract(instance);
                /////
                
                
            } catch (error) {
                console.log(error);
            }
            
        } else if (window.ethereum !== undefined && web3 !== null) {
            
            //1.
            setWeb3(null);
            setBtnText('Connect');
            /////
            
            //4.
            setVal(0);
            /////
            
        } else {
            console.log("Browser does not support Ethereum");
        }
    }
    
    //3.
    const handleGet = async () => {
        const v = await contract.get.call();
        console.log(v.toString());
        setStoredData(v.toString());
    }
    /////
    
    
    //5.
    const handleSet = async () => {
        
        console.log(`value=${val}`);
        if (isNaN(val) === false && val > 0) {
            await contract.set(val, {from: accounts[0]})
                .catch(error => console.log(error.message));
        }
    }
    /////
    
    //4.
    const handleChange = (e) => {
        console.log(e.target.value);
        setVal(parseInt(e.target.value));
    }
    /////
    
    return (
        
        <Container style={{marginTop:'20px'}} fluid>
            <Row>
                <Col>
                    <div style={{width: '640px', paddingBottom:'10px'}}>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Value</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl type="number" placeholder="Enter number" onChange={handleChange}/>
                        </InputGroup>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div style={{width: '640px', paddingBottom:'10px'}}>
                        <ButtonGroup style={{width: '100%'}}>
                            <Button href="#" variant="success" onClick={handleConnect}>
                                {btnText}
                            </Button>
                            <Button href="#" variant="primary" onClick={handleSet}>
                                Set
                            </Button>
                            <Button href="#" variant="info" onClick={handleGet}>
                                Get
                            </Button>
                        </ButtonGroup>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div style={{width: '640px', paddingBottom:'5px'}}>
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    <b>{storedData}</b>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Spinner isLoading={false}/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}


const Spinner = (props) => {
    return (
        props.isLoading?<Loader type="Grid" color="#CE62D4" height="24" width="24"/>:null
    )
}

export default DApp;
