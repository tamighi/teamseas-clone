<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230820091331 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE donation ADD count INT NOT NULL, ADD display_name VARCHAR(255) NOT NULL, ADD email VARCHAR(255) NOT NULL, ADD mobile VARCHAR(255) DEFAULT NULL, ADD team VARCHAR(255) DEFAULT NULL, ADD message VARCHAR(255) DEFAULT NULL, ADD anonymous TINYINT(1) NOT NULL, ADD created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\'');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE donation DROP count, DROP display_name, DROP email, DROP mobile, DROP team, DROP message, DROP anonymous, DROP created_at');
    }
}
