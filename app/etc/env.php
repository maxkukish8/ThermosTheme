<?php
return [
    'backend' => [
        'frontName' => 'admin'
    ],
    'remote_storage' => [
        'driver' => 'file'
    ],
    'queue' => [
        'consumers_wait_for_messages' => 1
    ],
    'crypt' => [
        'key' => '90338b18715d2b1601454740b96e6dec'
    ],
    'db' => [
        'table_prefix' => '',
        'connection' => [
            'default' => [
                'host' => 'mariadb',
                'dbname' => 'thermostheme',
                'username' => 'root',
                'password' => 'thermostheme',
                'model' => 'mysql4',
                'engine' => 'innodb',
                'initStatements' => 'SET NAMES utf8;',
                'active' => '1',
                'driver_options' => [
                    1014 => false
                ]
            ]
        ]
    ],
    'resource' => [
        'default_setup' => [
            'connection' => 'default'
        ]
    ],
    'x-frame-options' => 'SAMEORIGIN',
    'MAGE_MODE' => 'default',
    'session' => [
        'save' => 'files'
    ],
    'cache' => [
        'frontend' => [
            'default' => [
                'id_prefix' => 'd71_'
            ],
            'page_cache' => [
                'id_prefix' => 'd71_'
            ]
        ],
        'allow_parallel_generation' => false
    ],
    'lock' => [
        'provider' => 'db',
        'config' => [
            'prefix' => ''
        ]
    ],
    'directories' => [
        'document_root_is_pub' => true
    ],
    'cache_types' => [
        'config' => 1,
        'layout' => 1,
        'block_html' => 1,
        'collections' => 1,
        'reflection' => 1,
        'db_ddl' => 1,
        'compiled_config' => 1,
        'eav' => 1,
        'customer_notification' => 1,
        'config_integration' => 1,
        'config_integration_api' => 1,
        'full_page' => 1,
        'config_webservice' => 1,
        'translate' => 1,
        'vertex' => 1
    ],
    'downloadable_domains' => [
        'theme.m2-learning.tk'
    ],
    'install' => [
        'date' => 'Mon, 18 Oct 2021 09:31:40 +0000'
    ],
    'system' => [
        'stores' => [
            'default' => [
                'catalog' => [
                    'search' => [
                        'elasticsearch7_server_hostname' => 'elasticsearch',
                        'elasticsearch7_server_port' => '9200',
                        'elasticsearch7_index_prefix' => 'thermostheme'
                    ]
                ],
                'dev' => [
                    'static' => [
                        'sign' => '0'
                    ]
                ],
                'web' => [
                    'unsecure' => [
                        'base_url' => 'http://thermostheme.loc/'
                    ]
                ]
            ]
        ]
    ]
];
