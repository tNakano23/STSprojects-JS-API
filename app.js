$(function () {
    $("#form-ajax").on('submit',function(e) {
        e.preventDefault();

        // 入力された値を取得
        var input_postcode = $('#zipcode').val();
        // urlを設定
        var url = "https://zipcloud.ibsnet.co.jp/api/search";
        // 送るデータを成形する
        var param = { zipcode: input_postcode };

        // サーバーと通信(Ajax)
        $.ajax({
            type: "GET", 
            cache: false,
            data: param,
            url: url,
            dataType: "jsonp"
        })
        .done(function (res) {
            console.log(res.results);

            if (res.status != 200) {
                // 通信には成功。APIの結果がエラー
                // エラー内容を表示
                $('#zip_result').html("<p>入力値が適切でない、もしくは入力値の郵便番号が存在しません。</p>");

            } else {
                var result = res.results[0]
                console.log(result);
                //住所を表示
                $('#prefcode').html(result.prefcode);
                $('#address1').html(result.address1);
                $('#address2').html(result.address2);
                $('#address3').html(result.address3);
                $('#kana1').html(result.kana1);
                $('#kana2').html(result.kana2);
                $('#kana3').html(result.kana3);
            }

        })
        .fail(function (error) {
            console.log(error);
            $('#zip_result').html("<p>通信エラーです。時間をおいてお試しください</p>");
        });
    });
});

// })});