import React, {useEffect} from 'react';
import {Col, Form, Input, Layout, Row, Select} from 'antd';

const data = [
    {
        año: 2020,
        marca: 'Acura',
        modelo: 'TLX',
    },
    {
        año: 2020,
        marca: 'Acura',
        modelo: 'RDX',
    },
    {
        año: 2020,
        marca: 'Toyota',
        modelo: 'Yaris',
    },
    {
        año: 2020,
        marca: 'Toyota',
        modelo: 'Corolla',
    },
    {
        año: 2019,
        marca: 'Toyota',
        modelo: 'Camry',
    },
    {
        año: 2019,
        marca: 'BMW',
        modelo: '2 SERIES',
    },
    {
        año: 2019,
        marca: 'BMW',
        modelo: '3 SERIES',
    }
];

function App() {

    const [form] = Form.useForm();

    const [years, setYears] = React.useState<any[]>([]);
    const [brands, setBrands] = React.useState<any[]>([]);
    const [models, setModels] = React.useState<any[]>([]);

    const [year, setYear] = React.useState<number>(0);
    const [brand, setBrand] = React.useState<string>('');
    const [model, setModel] = React.useState<string>('');

    useEffect(() => {

        const years: any[] = [];

        data.sort((a, b) => a.año - b.año).forEach((item) => {
            if (years.find((year) => year.value === item.año) === undefined) {
                years.push({value: item.año, label: item.año});
            }
        });

        setYears(years);
    }, []);

    const handleSelectYear = (value: number) => {
      setYear(value);
      const brands: any[] = [];
      (data.sort((a, b) => a.año - b.año).filter((item) => item.año === value)).forEach((item) => {
        if (brands.find((brand) => brand.value === item.marca) === undefined) {
          brands.push({value: item.marca, label: item.marca});
        }
      });
      setBrands(brands);
      setBrand('')
      setModel('')
    };

    const handleSelectBrand = (value: string) => {
      setBrand(value);
      const models: any[] = [];
      (data.sort((a, b) => a.año - b.año).filter((item) => item.año === year && item.marca === value)).forEach((item) => {
        if (models.find((model) => model.value === item.modelo) === undefined) {
          models.push({value: item.modelo, label: item.modelo});
        }
      });
      setModels(models);
      setModel('')
    };

    const handleSelectModel = (value: string) => {
        setModel(value);
    };

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Layout.Content style={{padding: '50px'}}>

                <Row>
                    <Col span={12} offset={6} style={{background: 'white', padding: 48}}>

                        <Form form={form} layout="vertical">
                            <Form.Item label="Primer nombre">
                                <Input name="nombre"/>
                            </Form.Item>

                            <Form.Item label="Apellidos">
                                <Input name="apellidos"/>
                            </Form.Item>

                            <Form.Item label="Telefono">
                                <Input name="telefono"/>
                            </Form.Item>

                            <Form.Item label="Año">
                                <Select value={year} options={years} onChange={handleSelectYear}/>
                            </Form.Item>

                            <Form.Item label="Marca">
                                <Select value={brand} options={brands} onChange={handleSelectBrand}/>
                            </Form.Item>

                            <Form.Item label="Modelo">
                                <Select value={model} options={models} onChange={handleSelectModel}/>
                            </Form.Item>

                          <Form.Item label="Color">
                            <Input name="Color"/>
                          </Form.Item>

                          <Form.Item label="Placa">
                            <Input name="placa"/>
                          </Form.Item>

                        </Form>

                    </Col>
                </Row>
            </Layout.Content>
        </Layout>
    );
}

export default App;
