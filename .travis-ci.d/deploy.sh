
test ${TRAVIS_FTP_USER:?}
test ${TRAVIS_FTP_PWD:?}

ncftpput -R -v -u "${TRAVIS_FTP_USER}" -p ${TRAVIS_FTP_PWD} ftp.cluster021.hosting.ovh.net /public_html ./*

exit $?