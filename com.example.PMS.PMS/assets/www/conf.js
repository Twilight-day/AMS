function kakunin(btnNo) {
	if (btnNo == 1) {
		ret = confirm("画像を登録しますか？");
		if (ret == true) {
			location.href = "addPict.html";
		} else {
			alert("キャンセルされました");
		}
	} else if (btnNo == 2) {
		ret = confirm("画像一覧を表示しますか？");
		if (ret == true) {
			location.href = "sum.html";
		} else {
			alert("キャンセルされました");
		}
	} else {
		ret = confirm("戻りますか？");
		if (ret == true) {
			location.href = "index.html";
		} else {
			alert("キャンセルされました");
		}
	}
}