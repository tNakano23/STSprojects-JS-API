$(function () {
    $("#serch_btn").click(function () {
        // 入力された値を取得
        $input_postcode = $('#zipcode').val();
        // urlを設定
        var url = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=" + $input_postcode;
        // 送るデータを成形する
        var param = { zipcode: $input_postcode };
        $('#prefcode').html("wfeqf");

        // サーバーと通信(Ajax)
        
        $.ajax({
            type: "GET", 
            cache: false,
            // data: param,
            data: { zipcode: $input_postcode },
            url: "https://zipcloud.ibsnet.co.jp/api/search",
            dataType: "jsonp"
        })
        .done(function (res) {
            if (res.status != 200) {
                // 通信には成功。APIの結果がエラー
                // エラー内容を表示
                $('#zip_result').html(res.message);

            } else {
                //住所を表示
                $('#prefcode').val(res.prefcode);
                $('#address1').val(res.address1);
                $('#address2').val(res.address2);
                $('#address3').val(res.address3);
                $('#kana1').val(res.kana1);
                $('#kana2').val(res.kana2);
                $('#kana3').val(res.kana3);
            }

        })
        .fail(function (error) {
            console.log(error);
            $('#zip_result').html("<p>通信エラーです。時間をおいてお試しください</p>");
        });
    });
});

// })});