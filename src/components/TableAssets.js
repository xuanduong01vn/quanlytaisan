import styled from 'styled-components';

function TableAsset(){



    return (
        <TableAssetContainer>
            <h1>Màn hình</h1>
            <div className="data-table-section">
                
                <div className="data-table-container">
                    <div className="data-table-amount-selections">
                        Hiện thị
                        <select>
                            <option value="1">10</option>
                            <option value="2">20</option>
                            <option value="3">30</option>
                        </select>
                        tài sản
                    </div>
                    <div className="data-table-grid">
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Mã tài sản</th>
                                    <th>Tên tài sản</th>
                                    <th>Trạng thái tài sản</th>
                                </tr>

                            </thead>
                            <tbody>
                                <tr>
                                    <td>#1</td>
                                    <td>MH122</td>
                                    <td>Màn hình 123</td>
                                    <td>Đang sử dụng</td>
                                </tr>
                                <tr>
                                    <td>#2</td>
                                    <td>MH145</td>
                                    <td>Màn hình 145</td>
                                    <td>Không sử dụng</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="pagination-container">
                        <div className="pagination-page-detail">
                            Màn hình thứ 1 đến 10 trong 23 màn hình
                        </div>
                        <div className="pagination-page-list">
                            <ul class="pagination">
                                <li><a href="#">&lt;</a></li>
                                <li><a href="#">1</a></li>
                                <li class="active"><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#">&gt;</a></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </TableAssetContainer>
    );
}

export default TableAsset;

const TableAssetContainer = styled.div`
    padding: 0;
    margin: 0;

    h1{
        text-align: left;
        padding: 12px 24px;
        background-color: rgba(0, 0, 0, 0.05);
    }

    .data-table-section{
        padding: 24px;

        .data-table-container{
            border-radius: 12px;
            box-shadow: 0px 5px 20px lightgrey;
            padding: 12px;
            background-color: rgba(0, 0, 0, 0.05);

            .data-table-amount-selections{
                text-align: left;
                margin-bottom: 12px;

                select{
                    margin: 0 8px;
                }
            }

            .data-table-grid{
                height: 444px;
                padding: 12px 0;
                box-sizing: border-box;

                table{
                    border-collapse: collapse;
                    width: 100%;

                    tr{
                        

                        th, td{
                            height: 38px;
                            box-sizing: border-box;
                            border: 1px solid lightgrey;
                            padding: 8px 12px;
                        } 
                    }

                    tbody tr:nth-child(odd) {
                            background-color: rgba(0, 0, 0, 0.06);
                        }
                }
            }

            .pagination-container{
                padding-top: 12px;
                display: flex;
                justify-content: space-between;
            }


        }

    }

    



`