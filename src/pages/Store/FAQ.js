import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import '../Store/style/FAQStyle.scss';


function FAQ () {
    return (
        <section className='d-flex justify-content-center mb-5'>
            <Accordion className='FAQarea' defaultActiveKey="0">
                <Card className='FAQcard'>
                    <Accordion.Toggle className='FAQHeader' as={Card.Header} eventKey="0">
                        如何使用 7-11 交貨便退貨 FAQ
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className='FAQBody'>自 2022/01/03 起，針對 Pinkoi 訂單，只要商品的類型、包裝材積，符合 「Pinkoi 7-ELEVEN交貨便服務規範」，設計師即可選擇提供透過 Pinkoi 系統申請交貨便退貨的服務。申請退款後，會由設計師端審核退貨商品是否符合 7-11 退貨規範，會由設計師判斷並提供 7-11 交貨便退貨服務，如設計師審核退款狀態且完成 7-11 取件門市資料填寫，退款申請頁面會顯示如下：</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className='FAQcard'>
                    <Accordion.Toggle className='FAQHeader' as={Card.Header} eventKey="1">
                        如何使用 7-11 交貨便退貨 FAQ
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body className='FAQBody'>自 2022/01/03 起，針對 Pinkoi 訂單，只要商品的類型、包裝材積，符合 「Pinkoi 7-ELEVEN交貨便服務規範」，設計師即可選擇提供透過 Pinkoi 系統申請交貨便退貨的服務。申請退款後，會由設計師端審核退貨商品是否符合 7-11 退貨規範，會由設計師判斷並提供 7-11 交貨便退貨服務，如設計師審核退款狀態且完成 7-11 取件門市資料填寫，退款申請頁面會顯示如下：</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className='FAQcard'>
                    <Accordion.Toggle className='FAQHeader' as={Card.Header} eventKey="2">
                        如何使用 7-11 交貨便退貨 FAQ
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body className='FAQBody'>自 2022/01/03 起，針對 Pinkoi 訂單，只要商品的類型、包裝材積，符合 「Pinkoi 7-ELEVEN交貨便服務規範」，設計師即可選擇提供透過 Pinkoi 系統申請交貨便退貨的服務。申請退款後，會由設計師端審核退貨商品是否符合 7-11 退貨規範，會由設計師判斷並提供 7-11 交貨便退貨服務，如設計師審核退款狀態且完成 7-11 取件門市資料填寫，退款申請頁面會顯示如下：</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className='FAQcard'>
                    <Accordion.Toggle className='FAQHeader' as={Card.Header} eventKey="3">
                        如何使用 7-11 交貨便退貨 FAQ
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body className='FAQBody'>自 2022/01/03 起，針對 Pinkoi 訂單，只要商品的類型、包裝材積，符合 「Pinkoi 7-ELEVEN交貨便服務規範」，設計師即可選擇提供透過 Pinkoi 系統申請交貨便退貨的服務。申請退款後，會由設計師端審核退貨商品是否符合 7-11 退貨規範，會由設計師判斷並提供 7-11 交貨便退貨服務，如設計師審核退款狀態且完成 7-11 取件門市資料填寫，退款申請頁面會顯示如下：</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </section>
    )
}

export default FAQ;